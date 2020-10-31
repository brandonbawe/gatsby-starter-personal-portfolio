import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Job subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>What do I{" "}
                    <span className="word">do</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>7 Academy Douala, Cameroon</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                            Front-end Developer and Student
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Dec 2019 - Present
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ I am a fullstack web app development student at 7 Academy.
                      </div>
                    </div>
                  </div>
                </div>
                {/* - Job subsection */}

                {/* + Technologies subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What do I{" "}
                    <span className="word">know</span>?
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Technologies subsection */}

                {/* + School subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What did I{" "}
                    <span className="word">study</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Seven Advanced Academy Douala, Cameroon</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Full stack web application development.
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Dec 2019 - present
                        </h4>
                      </div>

                      <div className="card-text">
                        I earned my front-end developer certification at Seven Academy in October of 2020 and I'm in the backend part of my 
                        full stack web development course. Before that I was a 
                        student of Petroleum Engineering at the University Of Bamenda School of Engineering (NAHPI).
                      </div>
                    </div>
                  </div>
                </div>
                {/* - School subsection */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
