import { Octokit } from '@octokit/rest'
import config from 'config'
import { box, randomBytes } from 'tweetnacl'
import {
  decodeUTF8,
  encodeBase64,
  decodeBase64
} from 'tweetnacl-util'

const newNonce = () => randomBytes(box.nonceLength)

const encrypt = (
  secretOrSharedKey,
  msg,
  key
) => {
  const nonce = newNonce()
  const msgUint8 = decodeUTF8(msg)
  const encrypted = key
    ? box(msgUint8, nonce, key, secretOrSharedKey)
    : box.after(msgUint8, nonce, secretOrSharedKey)

  const fullMessage = new Uint8Array(nonce.length + encrypted.length)
  fullMessage.set(nonce)
  fullMessage.set(encrypted, nonce.length)

  const base64FullMessage = encodeBase64(fullMessage)
  return base64FullMessage
}

const octokit = new Octokit({
  auth: config.ghAuth
})

const gh = {
  saveEmail: async (newEmail) => {
    console.log(config.clientSecret)

    const sharedClientSide = box.before(
      decodeBase64(config.serverPublic),
      decodeBase64(config.clientSecret)
    )

    const encrypted = encrypt(sharedClientSide, newEmail)
    const oldEmails = await octokit.gists.get({
      gist_id: config.gistId
    })
    const oldContent = oldEmails.data.files.emails.content
    const newContent = oldContent + `\n${encrypted}`
    const res = await octokit.gists.update({
      gist_id: config.gistId,
      files: {
        emails: {
          content: newContent
        }
      }
    })

    if (res.status === 200) return true
    else {
      console.error('Non-200 response to sending email:', res.status)
      return false
    }
  }
}

export default gh
