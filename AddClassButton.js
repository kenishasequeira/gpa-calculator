import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';

export default function AddClassButton(){
  const [inputList, setInputList] = useState([{ courseName: "", grade: "", credits: "" }]);
  const [GPA, setGPA] = useState(0);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var isCredits = false;

  // handles input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    //to know if credits are null to prevent calculation errors
    if(isNaN(parseInt(list[index].credits))){
      isCredits = false;
    }
    else{
      isCredits = true;
    }
    setInputList(list);
    calculateGPA(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    setCount(prevCount => prevCount - 1)
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    isCredits = true;
    calculateGPA(list);
  };

// handle click event of the Add button
const handleAddClick = () => {
  setCount(prevCount => prevCount + 1);//counts the number of fields in the form for resetting purposes
  setInputList([...inputList, { courseName: "", grade: "", credits: "" }]);
};

//calculate total number of credits
var totalCreds = 1;
const calculateCredits = (inputList) => {
   const totalCredits = inputList.reduce(
    (prevValue, currentValue) => prevValue + parseFloat(currentValue.credits), 0
  );
  totalCreds = totalCredits;
}
//calculate final gpa
var finGPA;
const calculateGPA = (inputList) => {
  if(isCredits){
    calculateCredits(inputList);
  }
  const GPA = inputList.reduce(
    (prevValue, currentValue) => prevValue + (parseFloat(currentValue.credits)*parseFloat(currentValue.grade)), 0
  )
  finGPA = GPA/parseFloat(totalCreds);
  finGPA = Math.round(finGPA*100)/100;
  if(isNaN(finGPA)){
    setGPA("KINDLY ENTER VALUES CORRECTLY")
  }
  else{
    setGPA(finGPA);
  }
}

//resets inputList 
const handleReset = () => {
  return function(){
    const list = [...inputList];
    list.splice(0, count);
    setInputList(list);
    setCount(0);
    setGPA(0);
    setInputList([{courseName: '', grade: '', credits:''}]);
    handleClose();
  }
};

return (
  <div>
    {inputList.map((x, i) => {  //loops through the entire inputList
      return (
        <div>
          <input
            name="courseName"
            placeholder="Enter Course Name"
            value={x.courseName}
            onChange={e => handleInputChange(e, i)}
          />
          {'             '}
          <select name="grade" placeholder="Enter Grade" value={x.grade} onChange={e => handleInputChange(e, i)}>
            <option value="0">-</option>
            <option value="4.0">A</option>
            <option value="3.5">B+</option>
            <option value="3.0">B</option>
            <option value="2.5">C+</option>
            <option value="2.0">C</option>
            <option value="1.0">D</option>
            <option value="0.0">F</option>
          </select>
          {'             '}
          <input
            type="number"
            min="0.5" step="0.5"
            name="credits"
            placeholder="Enter Credits"
            value={x.credits}
            onChange={e => handleInputChange(e, i)}
          /> 
          
          {'             '}{inputList.length !== 1 && <Button variant="danger" onClick={() => handleRemoveClick(i)}>X</Button>}<br/><br/>
          <div className="btn-box">    
            {inputList.length - 1 === i && <Button variant="outline-danger" size="lg" onClick={handleAddClick}>Add Class</Button>}
          </div>
        </div>
        
      );
    }
    
    )}
    
    <div>
        <br/>
        <Button variant="outline-dark" onClick={handleShow}>
            RESET
        </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Reset?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to reset all information?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="danger" onClick={handleReset()}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    <div>
    <br/><br/>
      <h5><i><b>Final GPA:</b></i> {JSON.stringify(GPA)}</h5> 
    </div>
  </div>
);

  }

