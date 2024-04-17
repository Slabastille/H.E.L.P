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
    const [firstSelectorValue, setFirstSelectorValue] = useState('');
    const [secondSelectorOptions, setSecondSelectorOptions] = useState([]);
    const [linkedIssueKeys, setLinkedIssueKeys] = useState([]);
    const {linkType, setLinkType} = useContext(HelpContext);
    

    const handleRemoveValue = (index) => {
      setLinkedIssueKeys(linkedIssueKeys.filter((_, i) => i !== index));
    };

    const handleAddValue = (value) => {
      setLinkedIssueKeys([...linkedIssueKeys, value]);
    };
    
    const fetchComments = async () => {
        try {
          const response = await axios.get('http://localhost:3001/retrieveAllComments',);
            setComments(response.data.comments);
        } catch (error) {
          console.error('Error creating Jira issue:', error);
        }
    };
    
    const changeFormValue = (setValue) => (event) => {
      setValue(event.target.value);
    }

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
    


    useEffect(() => {
        let options;
        switch (firstSelectorValue) {
            case 'None' : 
                options = ['None'];
                break;
            case 'Access/Software (Clinician)':
                options = ['None', 'AirMD', 'Doximity', 'Lab Questions', 'Learning Community', 'Quantaflo', 'Schedule Optimization', 
                          'Update iOS', 'V2 App Update', 'V2 Cancellations', 'V2 Clarifications', 'V2 DX Validation', 'V2 Freezing', 'V2 Medication field'
                          ,'V2 Syncing' , 'V2 Training mode', 'V2 Unfinalized/ Past Due', 'V2 Update', 'vHRE'];
                break;
            case 'Access/Software (Internal)':
                options = ['None', 'Absolute', 'Ad Manager Plus', 'Adobe Creative Cloud', 'Adobe Standard' ,'ADP',  ];
                break;
            case 'Applications With Approvals':
              options = ['None'];
              break;
            case 'Department Transfer':
              options = ['None'];
              break;
            case 'Gsuite':
              options = ['None'];
              break;
            case 'Hardware':
              options = ['None'];
              break;
            case 'Information Services':
              options = ['None'];
              break;
            case 'New Hire':
              options = ['None'];
              break;
            case 'Password/Locked Accounts':
              options = ['None'];
              break;
            case 'Termination':
              options = ['None'];
              break;
            // ... other cases ...
            default:
                options = ['None'];
        }
        setSecondSelectorOptions(options);
        console.log("firstSelectorValue", firstSelectorValue)
    }, [firstSelectorValue]);
    

    const linkIssues = async (outwardIssueKey) => {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:3001/linkIssues', 
        {
          inwardIssueKey: currentRequest.key,
          outwardIssueKey: outwardIssueKey,
          linkType: linkType
        });
        setAssignedIssues(response.data);
        setReporter({ name: '', email: '', npi: '' });
      } catch (error) {
        console.error('Error retrieving tickets:', error);
      } finally {
        setLoading(false);
      }
    };

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
                <div className='ticketFormResolveItemHeader'>Linked Issues</div>
                  <select className='ticketFormResolveItemBody' value={linkType} onChange={changeFormValue(setLinkType)}>
                    <option value="relates to">relates to</option>
                    <option value="is cloned">is cloned by</option>
                    <option value="is duplicated by">is duplicated by</option>
                    <option value="is blocked by">is blocked by</option>
                  </select>
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Issue </div>
                <div className='ticketFormResolveItemBodyIssues'  >
                  {linkedIssueKeys.length > 0 && linkedIssueKeys.map((value, index) => (
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
                  <label className='ticketFormResolveItemBodylabels'>
                    <input type="radio" value="None" name="category" /> 
                    None
                  </label>
                  <label className='ticketFormResolveItemBodylabels'>
                    <input type="radio" value="Yes" name="category" /> 
                    Yes
                  </label>
                  <label className='ticketFormResolveItemBodylabels'>
                    <input type="radio" value="No" name="category" /> 
                    No
                  </label>
                </div>  
              </div>
              <div className='ticketFormResolveItems'>
                <div className='ticketFormResolveItemHeader'>Service Request Category </div>
                <div className='ticketFormResolveItemBodyCategories'>
                  <select className='ticketFormResolveItemBodyCategorySelector' value={firstSelectorValue} onChange={(e) => setFirstSelectorValue(e.target.value)}>
                  <option>None</option>
                  <option>Access/Software (Clinician) </option>
                  <option>Access/Software (Internal) </option>
                  <option>Applications With Approvals </option>
                  <option>Department Transfer </option>
                  <option>Gsuite </option>
                  <option>Hardware </option>
                  <option>Information Services </option>
                  <option>New Hire </option>
                  <option>Password/Locked Accounts </option>
                  <option>Termination </option>

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