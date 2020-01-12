import React, { Component } from 'react';

export default class About extends Component {

  componentDidMount() {
    console.log('mount');
    let component = document.querySelector('.about');
    component.classList.add('showing');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

    render() {
        const contactInfo = [
            {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/dylan-connor/'
            },
            {
                title: 'Github',
                link: 'https://github.com/DCU4'
            },
            {
                title: 'Email',
                link: 'mailto:DylanJConnor4@gmail.com'
            }

        ];
        const contactItems = contactInfo.map((items,i) =>
            <a data-text="__________________" target="_blank" key={i} href={items.link} className={"contact-link "+this.props.darkMode}>{items.title}</a>
        )
        return (

            <section className="about info">
                <h4>Hello.</h4>
                <p className="bio">I am an aspiring front end developer and digital marketer keen on working to help small businesses grow. I am experienced in HTML5, CSS3, PHP, and JavaScript. I am also skilled at social media outreach, content writing, and audio and video production. I am an American-Irish dual citizen living in Alexandria, VA. Feel free to contact me if you would like to work or chat! I am currently working at <a className={this.props.darkMode ? 'dark-mode job' : 'job'} href="https://www.req.co">REQ</a> in Washington, DC.</p>
                <p>This portfolio site was made with React and SASS/SCSS, and it is hosted on Github Pages.</p>
                <div className="contact">
                    {contactItems}
                </div>
            </section>

        );
    }
}