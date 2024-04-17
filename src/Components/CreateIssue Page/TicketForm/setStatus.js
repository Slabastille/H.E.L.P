const statusTypes = { 
                      waitingForSupport : "781" , 
                      waitingForCustomer : "851" , 
                      escalated : "951",
                      inDevelopment : "891",
                      backlog : "871"
                    }
    
    const availableStatus = (currStat) => {
      //Waiting for support
      if( currStat == "781" ){
        return { 
            waitingForCustomer : "851" , 
            inDevelopment : "891",
            escalated : "951",
            resolved : "761",
            cancelled : "901",
            backlog : "871",
        }
      }
      //waiting for customer
      else if (currStat === "851"){
        return { 
          waitingForSupport : "781" , 
          waitingForCustomer : "851" , 
          escalated : "951",
          inDevelopment : "891",
          backlog : "871",
          resolved : "",
          cancelled : "",
      }
      }
    }
                    
    const setStatus = async (request) => {
      try {
        setLoading(true);
        const response = await axios.post(
          'http://localhost:3001/setStatus',
          {
            issueId: '3658976',
            transitionId: '21',
          }
        );
        setLoading(false);
        console.log('Jira issue status set:', response.data);
        //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
      } catch (error) {
        
      }
    }