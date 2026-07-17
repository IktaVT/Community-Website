import BackLink from '../../components/BackLink/BackLink'
import staffData from '../../data/staff.json'
import { asset } from '../../lib/asset'

import { FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import './Staff.scss'

interface Socials {
  twitter?: string
  twitch?: string
}

interface StaffMember {
  name: string
  title: string
  info: string
  image: string
  socials?: Socials
}

interface StaffSection {
  section: string
  members: StaffMember[]
}

const sections: StaffSection[] = staffData

function Staff() {
  return (
    <div className="staff">
      <div className="staff__bg" aria-hidden="true">
        <div className="staff__bg-color" />
      </div>

      <div className="staff__content">
        <BackLink to="/">Back home</BackLink>

        <h1 className="staff__heading">Staff</h1>

        {sections.map(({ section, members }) => (
          <section key={section} className="staff__section">
            <h2>{section}</h2>

            <div className="staff__grid">
              {members.map((member) => (
                <div key={member.name} className="staff__card">
                  <img
                    src={asset(`/assets/staff/${member.image}`)}
                    alt={member.name}
                    className="staff__photo"
                  />

                  <h3>{member.name}</h3>

                  <p className="staff__title">{member.title}</p>

                  <p className="staff__info">{member.info}</p>

                  {member.socials &&
                    (member.socials.twitter ||
                      member.socials.twitch) && (
                      <div className="staff__socials">
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on X`}
                            title={`${member.name} on X`}
                          >
                            <FaXTwitter aria-hidden="true" />
                          </a>
                        )}

                        {member.socials.twitch && (
                          <a
                            href={member.socials.twitch}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on Twitch`}
                            title={`${member.name} on Twitch`}
                          >
                            <FaTwitch aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Staff