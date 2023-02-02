import React from 'react'
import { Modal } from '@material-ui/core'
type Props = {}

const Model = (props: Props) => {
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
      
    const handleOpen = () => {
      setOpen(true);
    };
  
  return (
         <Modal
        onClose={handleClose}
        open={open}>
    
        <div className="transition-all duration-500 h-[24rem] flex w-128  shadow-2xl border-2 rounded-xl border-black-300 bg-white flex mx-[470px] mt-56">
        <div className=" w-1/4 border-r-2 border-grey-400">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" className="rounded-xl h-12 ml-8 mt-8"></img>
      
    </div>

    <div className="flex flex-col items-left">
        
    </div>
</div>
      </Modal>
  )
}

export default Model