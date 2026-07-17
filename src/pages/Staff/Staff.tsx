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
      <div className="staff__container">
        <BackLink to="/">Back to Home</BackLink>

        <header className="staff__header">
          <p className="staff__eyebrow">Meet the team</p>
          <h1 className="staff__title">V-SMP Staff</h1>
          <p className="staff__intro">
            Meet the people helping organize, develop, and manage the V-SMP
            community.
          </p>
        </header>

        <div className="staff__sections">
          {sections.map((section) => (
            <section className="staff__section" key={section.section}>
              <div className="staff__section-heading">
                <h2>{section.section}</h2>
                <span aria-hidden="true" />
              </div>

              <div className="staff__grid">
                {section.members.map((member) => (
                  <article className="staff__card" key={member.name}>
                    <div className="staff__photo-wrapper">
                      <img
                        className="staff__photo"
                        src={asset(`/assets/staff/${member.image}`)}
                        alt={`${member.name} profile`}
                      />
                    </div>

                    <div className="staff__card-content">
                      <h3 className="staff__name">{member.name}</h3>
                      <p className="staff__role">{member.title}</p>
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
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Staff