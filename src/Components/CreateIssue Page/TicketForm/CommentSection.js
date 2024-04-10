import React, {useState, useEffect, useContext} from 'react';
import HelpContext from '../../../context/HelpContext';
import axios from 'axios';



const CommentSection = () => {

    const {comments, setComments} = useContext(HelpContext);
    const [currentComment, setCurrentComment] = useState('')
    
    const addCommentSubmit = (e , comment, issueId ) => {
        e.preventDefault();

        try {
        // setLoading(true);
        const response =  axios.post(
            'http://localhost:3001/addComment',
            {
            comment: comment,
            id : issueId
            }
        );
        // setLoading(false);
        // setCurrentPage(2);
        console.log('Jira comment added:', response.data);
        
        
        //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
    } catch (error) {
        console.error('Error creating the comment:', error);
    }
    setCurrentComment('');
    }


    const handleChange = (e) => {
        setCurrentComment(e.target.value)
    }
    // useEffect(() => {
    //     console.log(comments)
    // }, [comments])
    const addComment = (type) =>{
        const newComment = {
            comment: currentComment,
            type: type,
            created: new Date().toLocaleString(),
        }
        setComments(prevComments => [...prevComments, newComment]);
        setCurrentComment('');
    }
  return (
    <div className='commentSectionContainer'>
        <div className='commentSectionHeader'>
            <div className='commentSectionHeaderCanned'>Canned Comments</div>
        </div>
        <div className='commentSectionBody' >
            <textarea className='commentBox' placeholder="Click to enter Comment"value={currentComment} onChange={handleChange} />
            <div className='commentBoxButtons' >
                <button className='commentButtonPublic' onClick={(e) => {e.preventDefault(); addCommentSubmit(e , currentComment, "1797576");}}>Share With Customer</button>
                <button className='commentButtonInternal' onClick={(e) => {e.preventDefault(); addCommentSubmit(e , currentComment, "1797576");}}>Internal Comment</button> 
            </div>
        </div>
        
        
    </div>
  );
}

export default CommentSection;