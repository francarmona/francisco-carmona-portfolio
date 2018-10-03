<template>
  <div id="cv">
    <div class="background"></div>
    <div class="leave">
      <header class="row">
        <div class="col-sm-12">
          <h1 class="title">Francisco J. Carmona Olmedo</h1>
          <h2 class="subtitle">Full-stack web developer</h2>
        </div>
      </header>
      <main class="row">
        <section class="col-md-4 sidebar">
          <section>
            <h2>Profile</h2>
            <p>Lorem ipsum qwerasdf qwerty qwer asdfdsf</p>
          </section>
          <section class="personal-details">
            <h2>Personal details</h2>
            <section>
              <h3>Nationality</h3>
              <p>Spanish</p>
            </section>
            <section>
              <h3>Address</h3>
              <p>Paseo del Molino 8, 28045, Madrid</p>
            </section>
          </section>
          <section class="contact">
            <h2>Contact</h2>
            <div class="contact-item">
              <img src="img/brands/gmail.svg" alt="My Email">
              <a href="mailto:fcarmona.olmedo@gmail.com" title="Email">fcarmona.olmedo@gmail.com</a>
            </div>
            <div class="contact-item">
              <img src="img/brands/chrome.svg" alt="My website">
              <a href="https://fcarmona.com" target="_blank" title="F. Carmona">https://fcarmona.com</a>
            </div>
            <div class="contact-item">
              <img src="img/brands/linkedin.svg" alt="My Linkedin">
              <a target="_blank" href="https://es.linkedin.com/in/francisco-josé-carmona-olmedo-b37a0342" title="Linkedin">/in/francisco-josé-carmona-olmedo-b37a0342</a>
            </div>
            <div class="contact-item">
              <img src="img/brands/twitter.svg" alt="My Twitter">
              <a target="_blank" href="https://twitter.com/frncar" title="Twitter">@frncar</a>
            </div>
          </section>
          <section class="skills">
            <h2>Skills</h2>
            <section>
              <h3>Frontend</h3>
              <span class="label" v-for="skill in skills.frontend">{{ skill }}</span>
            </section>
            <section>
              <h3>Backend</h3>
              <span class="label" v-for="skill in skills.backend">{{ skill }}</span>
            </section>
            <section>
              <h3>Devops</h3>
              <span class="label" v-for="skill in skills.devops">{{ skill }}</span>
            </section>
          </section>
        </section>
        <section class="col-md-8 body">
          <section class="professional-experience">
            <h2>Professional experience</h2>
            <article v-for="job in jobs">
              <h3>{{ job.role }}</h3>
              <div>
                <h4>{{ job.company }}</h4>
                <span class="date">{{ job.date }}</span>
              </div>
              <ul>
                <li v-for="dutie in job.duties">{{ dutie }}</li>
              </ul>
            </article>
          </section>
          <section class="education">
            <h2>Education</h2>
            <article v-for="ed in education">
              <h3>{{ ed.degree }}</h3>
              <p v-if="ed.description">{{ ed.description }}</p>
              <h4>{{ ed.university }}</h4>
            </article>
          </section>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data: () => {
    return {
      skills: {
        frontend: ['Angular', 'Vue', 'Ionic', 'Redux', 'Jasmine', 'Karma', 'Jest', 'Gulp', 'Sass'],
        backend: ['Laravel', 'Codeigniter', 'FuelPHP', 'Slim', 'Lumen', 'Node', 'Mongo', 'Cassandra', 'SQL'],
        devops: ['Docker', 'Rancher', 'Openshift', 'Jenkins', 'SonarQube', 'Git', 'Gitlab', 'AWS', 'Sentry']
      },
      jobs: [
        {
          role: 'Full-Stack developer',
          company: 'Special Tours (Ávoris Travel), (Madrid)',
          date: 'April 2014 - present',
          duties: [
            'Participating from scratch in the development process of a corporate intranet for managing tourist packages.',
            'Developing fully featured hybrid mobile applications with Cordova, Ionic and Onsen UI.',
            'Integrating the corporate intranet with SAP.',
            'Developing within a Continuous Integration environment with Jenkins, and using Sonarqube as the static code analysis tool.',
            'Using Openshift as container orchestration system (migrated from Rancher).',
            'Frontend: AngularJs, Angular, Ionic, Onsen UI, Bootstrap, Foundation, Sass.',
            'Backend: Laravel, Slim, Lumen.',
            'Tools: Git, NPM, Bower, Grunt, Gulp.',
            'DB: MongoDB, SQL Server, Cassandra.',
          ]
        },
        {
          role: 'Full-Stack developer',
          company: 'TLS Group (Madrid)',
          date: 'August 2013 - March 2014',
          duties: [
            'Merged multiple real state websites into a modularized and customized one.',
            'Developed an intranet for managing everything related to properties in a real state agency.',
            'Frontend: AngularJs, HTML5, CSS3, Bootstrap, Sass.',
            'Backend: FuelPHP, Codeigniter.',
            'Tools: Git, NPM, Bower, Gulp.',
            'DB: MySql.'
          ]
        },
        {
          role: 'Intern Web developer',
          company: 'Access Networks Solutions Ltd (London)',
          date: 'December 2012 - June 2013',
          duties: [
            'Developed a corporate website fully integrated wit a payment gateway.',
            'Maintenance of clients websites.',
            'Frontend: Vanilla Javascript, HTML5, CSS3, Bootstrap.',
            'Backend: Codeigniter, JSP.'
          ]
        },
        {
          role: 'Intern Software developer',
          company: 'SIA Rigatta (Riga)',
          date: 'June 2011 - December 2011',
          duties: [
            'Development of mobile applications using Corona SDK.'
          ]
        },
        {
          role: 'Web developer',
          company: 'Implementos Empresariales S.L (Málaga)',
          date: 'December 2010 - May 2011',
          duties: [
            'Developed a web application for tracking the position and status of bus fleets.',
            'Involved in the development of a local newspaper.',
            'Backend: customized homemade MVC PHP framework.',
            'Frontend: Vanilla Javascript, HTML5, CSS3.',
            'DB: MySql.'
          ]
        }
      ],
      education: [
        {
          degree: 'BSc of Telecommunications Engineering',
          description: 'Last Year Project: Web Applications for location of mobile devices (Mark: Highest mark).',
          university: 'Superior Technical School of Telecommunications Engineering, Málaga (Spain)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  @import '../../scss/functions';

  #cv {
    font-size: .9rem;
    color: black;
    .background {
      height: 100%;
      width: 100%;
      top: 0;
      z-index: -1;
      position: fixed;
      background: color($colors, 'primary');
    }
    .leave {
      background: white;
      max-width: $container-width;
      margin: 0 auto;
      box-shadow: rgba(0,0,0,.35) 0.4rem 0.7rem 9.3rem 0.3rem;
      padding: 1.5rem;
      header {
        box-shadow: none;
      }
      .title {
        font-size: 2.5rem;
        color: color($colors, 'primary');
        margin: 0 0 .5rem 0;
      }
      .subtitle {
        margin: 0 0 1rem 0;
        font-size: 1.15rem;
        text-align: inherit;
        font-weight: bold;
        text-transform: uppercase;
      }
      main {
        margin-top: 3rem;
        section {
          p {
            margin: 0;
          }
          h2 {
            @extend .subtitle;
          }
          h3 {
            margin: 0 0 .3rem 0;
            font-weight: bold;
            color: color($colors, 'primary');
            font-size: 1.1rem;
          }
          &.sidebar {
            padding-right: 3rem;
            section {
              padding-bottom: 2rem;
              &.personal-details {
                section {
                  padding-bottom: 1.3rem;
                  p {
                    font-size: .9rem;
                  }
                }
                section:last-child {
                  padding-bottom: 0;
                }
              }
              &.contact {
                .contact-item {
                  display: flex;
                  padding-bottom: 1.3rem;
                  align-items:center;
                  img {
                    width: 23px;
                  }
                  a {
                    padding-left: 7px;
                  }
                }
              }
              &.skills {
                span {
                  &.label {
                    background-color: #f4f4f4;
                    display: inline-block;
                    border-radius: 3px;
                    padding: 0.3em 0.7em;
                    margin: 0 0.5em 0.5em 0;
                  }
                }
              }
            }
          }
          &.body {
            section {
              padding-bottom: 2rem;
              &.professional-experience, &.education {
                /*h3:before {*/
                  /*content: '\e836';*/
                  /*font-family: 'Material Icons';*/
                  /*font-size: .75rem;*/
                  /*position: relative;*/
                  /*margin-right: 10px;*/
                /*}*/
                span.date {
                  float: right;
                }
                h4 {
                  margin: 0;
                  display: inline-block;
                  text-transform: uppercase;
                  font-size: .9rem;
                  font-weight: normal;
                }
              }
              &.education {
                article {
                  p {
                    font-size: .85rem;
                    margin-bottom: .4rem;
                  }
                }
              }
            }
          }
        }
      }
    }

    @media screen and (min-width: $md-breakpoint) {
      .leave {
        margin: 3rem auto;
        padding: 5rem 4rem;
      }
    }
  }




</style>
