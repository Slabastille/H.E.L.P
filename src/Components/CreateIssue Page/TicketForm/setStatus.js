const statusTypes = { cancelled : "901", 
                      waitingForSupport : "781" , 
                      waitingForCustomer : "851" , 
                      inDevelopment : "891"}
    

    const setStatus = async () => {
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