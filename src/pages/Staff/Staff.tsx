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
    <main className="staff">
      <div className="staff__bg" aria-hidden="true">
        <div className="staff__bg-color" />
      </div>

      <div className="staff__content">
        <BackLink to="/">Back to Home</BackLink>

        <h1 className="staff__heading">V-SMP Staff</h1>

        {sections.map((section) => (
          <section className="staff__section" key={section.section}>
            <h2>{section.section}</h2>

            <div className="staff__grid">
              {section.members.map((member) => (
                <article className="staff__card" key={member.name}>
                  <img
                    className="staff__photo"
                    src={asset(`/assets/staff/${member.image}`)}
                    alt={`${member.name} profile`}
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
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Staff