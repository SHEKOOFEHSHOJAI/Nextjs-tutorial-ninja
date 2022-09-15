import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {
    function addMeetupHandler(entreMeetupData) {
        console.log(entreMeetupData)
    
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}