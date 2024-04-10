import React, {useEffect, useState, useContext} from 'react';
import CommentSection from './CommentSection';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';
import HelpContext from '../../../context/HelpContext';
import axios from 'axios';

const CommentsPage = () => {
    const { comments, setComments } = useContext(HelpContext);
    const {loggedInUser} = useContext(HelpContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const {currentRequest, setCurrentRequest} = useContext(HelpContext);

    const [linkedIssuesKey, setLinkedIssuesKey] = useState([]);

    const handleRemoveValue = (index) => {
      setLinkedIssuesKey(linkedIssuesKey.filter((_, i) => i !== index));
    };

    const handleAddValue = (value) => {
      setLinkedIssuesKey([...linkedIssuesKey, value]);
    };
    
    const fetchComments = async () => {
        try {
          const response = await axios.get('http://localhost:3001/retrieveAllComments',);
            setComments(response.data.comments);
          //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
        } catch (error) {
          console.error('Error creating Jira issue:', error);
        }
    };
    

    useEffect(() => {
      fetchComments();
    }, [comments]);

    // useEffect(() => {
    // const interval = setInterval(() => {
    //     fetchComments();
    // }, 5000); // Fetches every 5 seconds

    // // This is important, it clears the interval when the component is unmounted
    // return () => clearInterval(interval);
    // }, []);
    
    const [firstSelectorValue, setFirstSelectorValue] = useState('');
    const [secondSelectorOptions, setSecondSelectorOptions] = useState([]);

    useEffect(() => {
        let options;
        switch (firstSelectorValue) {
            case 'None' : 
                options = ['none'];
                break;
            case 'Access/Password':
                options = ['Ad/Okta Account Locked', 'Option2', 'Option3'];
                break;
            case 'Access/Software/Services':
                options = ['Option4', 'Option5', 'Option6'];
                break;
            case 'AR/vendor':
              options = ['Option4', 'Option5', 'Option6'];
              break;
            case 'Calendar':
              options = ['Option4', 'Option5', 'Option6'];
              break;
            case 'Department Transfer':
              options = ['Option4', 'Option5', 'Option6'];
              break;
            case 'Email':
              options = ['Option4', 'Option5', 'Option6'];
              break;
            case 'General Support':
              options = ['Option4', 'Option5', 'Option6'];
              break;
            // ... other cases ...
            default:
                options = [];
        }
        setSecondSelectorOptions(options);
        console.log("firstSelectorValue", firstSelectorValue)
    }, [firstSelectorValue]);
    
    const resolveIssue = (e) => {
      e.preventDefault();
      console.log("Pressed button")
      setCurrentPage(1)
    };


  return (
      <div className='currentTicketForm'>
      {!loading && currentPage === 2 && ( 
      <div>
        <div className="ticketFormHeader">
          <h1>Comments</h1>
        </div>
        <form className="ticketForm" action="/">
          <div className='ticketFormCommentSection'>
            <div className='ticketAllCommentsContainer'>
              {[...comments].reverse().map((comment) =>
                <div className='ticketAllComments' key={comment.id}>
                  <div>
                    <div className='commentHeader'>
                      <div className='commentTitle'> <a style={{fontWeight :"600", color : "#c4d600" }}>{loggedInUser.name}</a> added a Comment -  {extractDate(comment.created)} {extractTime(comment.created)}</div>
                      <div className='commentType'> {comment.type} </div>
                    </div>
                    <div className='comment'> {comment.body} </div>
                    <div className='commentActions'>
                      <div className='commentEdit'>Edit</div>
                      <div className='commentDelete'>Delete</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='ticketCommentSection' >
              <CommentSection />
            </div>
          </div>
          <div className='ticketFormButtonContainer'>
            <button className='ticketFormSecondButton'>
              temp
            </button>
            <button className="ticketFormButton" type="submit" onClick={(e) => resolveIssue(e)}>
              Change Status
            </button>
          </div>              
        </form>
      </div>
      )}


      {!loading && currentPage === 1 && ( 
      <div>
        <div className="ticketFormHeader">
          <h1>Current Status : {currentRequest.status}</h1>
        </div>
        <div className="ticketForm" action="/">
          <div className='ticketFormCommentSection'>
            <div className='ticketFormResolveContainer'>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Resolution </div>
                <select className='ticketFormResolveItemBody'>
                  <option value="Resolved">Resolved</option>
                  <option value="Unresolved">Unresolved</option>
                </select>
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Linked Issues </div>
                <select className='ticketFormResolveItemBody'>
                  <option value="relates to">relates to</option>
                  <option value="is cloned">is cloned by</option>
                </select>
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Issue </div>
                <div className='ticketFormResolveItemBodyIssues'  >
                  {linkedIssuesKey.length > 0 && linkedIssuesKey.map((value, index) => (
                    <div key={index} className='ticketFormResolveItemBodyIssueKeys'>

                      <div>{value}</div>
                      <button onClick={() => handleRemoveValue(index)}>x</button>
                    </div>
                  ))}
                  <input className='ticketFormResolveItemBodyIssueInput' type="text" onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      handleAddValue(event.target.value);
                      event.target.value = '';
                      event.preventDefault();
                    }
                  }} />
                </div>
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Resolved at Service Desk level</div>
                <div className='ticketFormResolveItemBodylabel'>
                  <label>
                    <input type="radio" value="None" name="category" /> 
                    None
                  </label>
                  <label>
                    <input type="radio" value="Yes" name="category" /> 
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="No" name="category" /> 
                    No
                  </label>
                </div>  
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Service Request Category </div>
                <div className='ticketFormResolveItemBodyCategories'>
                  <select className='ticketFormResolveItemBodyCategorySelector' value={firstSelectorValue} onChange={(e) => setFirstSelectorValue(e.target.value)}>
                  <option>Choose a Category</option>
                  <option>None</option>
                  <option>Access/Password</option>
                  <option>Access/Software/Services</option>
                  <option>AR/vendor</option>
                  <option>Calendar</option>
                  <option>Department Transfer</option>
                  <option>Email</option>
                  <option>General Support</option>
                  </select>
                  <select className='ticketFormResolveItemBodyCategorySelector'>
                    {secondSelectorOptions.map(option => <option key={option}>{option}</option>)}
                  </select>
                </div>
              </div>

            </div>
          <div className='ticketCommentSection' >
              <CommentSection />
            </div>
          </div>
          <div className='ticketFormButtonContainer'>
            <div>cancel</div>
            
            <button onClick={() => setCurrentPage(2)}> SUBMIT </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default CommentsPage;