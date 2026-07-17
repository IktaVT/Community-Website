import BackLink from '../../components/BackLink/BackLink'
import staffData from '../../data/staff.json'
import { asset } from '../../lib/asset'

import { FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import './Staff.scss'

interface Social {
  platform: string
  url: string
}

interface StaffMember {
  name: string
  title: string
  info: string
  image: string
  socials?: Social[]
}

interface StaffSection {
  section: string
  members: StaffMember[]
}

const sections = staffData as StaffSection[]

function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case 'twitter':
    case 'x':
      return <FaXTwitter />

    case 'twitch':
      return <FaTwitch />

    default:
      return null
  }
}

function Staff() {
  return (
    <div className="staff">
      <div className="staff__bg" aria-hidden="true">
        <div className="staff__bg-color" />
      </div>

      <div className="staff__content">
        <BackLink to="/">Back home</BackLink>

        <h1 className="staff__heading">Our Staff</h1>

        {sections.map(({ section, members }) => (
          <section key={section} className="staff__section">
            <h2>{section}</h2>

            <div className="staff__grid">
              {members.map((member) => (
                <article
                  key={member.name}
                  className="staff__card"
                >
                  <img
                    src={asset(`/assets/staff/${member.image}`)}
                    alt={member.name}
                    className="staff__photo"
                  />

                  <h3>{member.name}</h3>

                  <p className="staff__title">
                    {member.title}
                  </p>

                  <p className="staff__info">
                    {member.info}
                  </p>

                  {member.socials && member.socials.length > 0 && (
                    <div className="staff__socials">
                      <span>Social:</span>

                      {member.socials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.platform}
                        >
                          {getSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Staff
