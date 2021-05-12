
import './dashboard.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


function Cards(){
    return(
        <Card className="cards"
        style={{
            margin:'30px',
        width: '30vw',
        height:'70vh',
        backgroundColor: '#161616',
        flex: 1
        }}
    >

    </Card>

    );
}


function dashboard() {
  return (
    <div class="flex-container">
        <div class="flex-left">
            

        </div>
        <div class="flex-right">
            <div class="flex-card">
                <div class="flex-tasks">
                 
                       <Cards />
                      
                </div>
                <div class="flex-calender">
                   
                        <Cards />
                    
                </div>
            </div>
            
            
        </div>
    </div>
  );
}

export default dashboard;
