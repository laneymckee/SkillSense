import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENT IMPORTS
import MentorTabs from '../MentorTabs/MentorTabs';

class MyMentorships extends Component {
  state = {
    mentors: [
      {
        mentor: 'Mr. Miyagi',
        project: 'Website Redesign',
        client: 'John Does Doughnuts',
        focus_skill: 'Full Stack Development'
      },
      {
        mentor: 'Yoda',
        project: 'Video Game Project',
        client: 'Mario & Luigi',
        focus_skill: 'UI/UX Design'
      }
    ]
  };

  render() {
    let mentorList = this.state.mentors.map((mentor, i) => {
      return (
        <div className="list-item">
          <div>
            {/* left side info */}
            <h2>{mentor.mentor}</h2>
            <h4>{mentor.focus_skill}</h4>
          </div>
          {/* right side info */}
          <div>
            <p>Project: {mentor.project}</p>
            <p>Client: {mentor.client}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="list-display">
        {/* Navigation tabs on Mentorship Page:
            (Active, Applied, Completed) */}
        <div>
          <MentorTabs />
        </div>
        {/* Selected Mentor List */}
        <div className="list">{mentorList}</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    store
  };
};

export default connect(mapStateToProps)(MyMentorships);
