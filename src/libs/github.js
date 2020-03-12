import { Octokit } from '@octokit/rest'
import config from 'config'

const octokit = new Octokit({
  auth: config.ghAuth
})

const gh = {
  saveEmail: async (newEmail) => {
    const oldEmails = await octokit.gists.get({
      gist_id: config.gistId
    })
    const oldContent = oldEmails.data.files.emails.content
    const newContent = oldContent + `\n${newEmail}`
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
