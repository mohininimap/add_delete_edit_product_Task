
// import { TextField,DialogTitle,Dialog,DialogContent,Button,DialogActions } from '@mui/material';

// export default function FormDialogue({open,handleClose}){

//     return(
//         <div>
//             <Dialog
//             open={open}
//             onClose={handleClose}
//             // aria-labelledby="alert-dialog-title"
//             // aria-describedby="alert-dialog-description"
//             />
//            <DialogTitle id="alert-dialog-title">Create new user</DialogTitle>
//            <DialogContent>
//             <form action="">
//                 <TextField id="name" placeholder="Enter name" label="name" fullWidth/>
//                 <TextField id="name" placeholder="Enter name" label="name" fullWidth/>

//                 <TextField id="name" placeholder="Enter name" label="name" fullWidth/>

//                 <TextField id="name" placeholder="Enter name" label="name" fullWidth/>

//             </form>
//            </DialogContent>
//            <DialogActions>
//             <Button onClick={handleClose} color="primary">Cancel</Button>
//             <Button  color="primary">Submit</Button>
//            </DialogActions>
//         </div>
//     )
// }

import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
  let [nameError,setNameError]= useState(false);
  // let [firstNameError, setFirstnameError] = useState(false);

const {id,name,karat,weight,price,image}=data;

// const nameRegex = /^[A-Za-z]+$/;

// if (e.target.name === "name") {
//   let name = e.target.value;

//   if (!name.match(nameRegex)) {
//     setFirstnameError(true);
//   } else {
//     setFirstnameError(false);
//   }
// }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{id?"Update Product":"Create New Product"}</DialogTitle>
           <DialogContent>
            <form action="">
              <TextField onChange={e=>onChange(e)} margin="dense" value={name} name="name" placeholder="Enter name" label="name" fullWidth required/>
             
                <TextField onChange={e=>onChange(e)}  margin="dense" name="karat" value={karat} placeholder="Karat" label="karat" fullWidth required/>

               <TextField onChange={e=>onChange(e)}  margin="dense" name="weight" value={weight} placeholder="Weight" label="weight" fullWidth required/>
               <TextField onChange={e=>onChange(e)}  margin="dense" name="price" value={price} placeholder="Price" label="price" fullWidth required/>
             
                {/* <TextField margin="dense" type="file" name="image" placeholder="Image" label="image" fullWidth/> */}
                <input id="file1" type="file"  name="image" value={image} onChange={e=>onChange(e,id)}/>

           </form>
           </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant='outlined'>Cancel</Button>
          <Button onClick={()=>handleFormSubmit()} variant='contained' color="primary">{id?"Update":"Submit"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}