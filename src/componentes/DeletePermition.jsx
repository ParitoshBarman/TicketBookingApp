import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const DeletePermition = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    function deleteOperation(){
        props.delete()
        console.log("Deleteed...")
        onClose()
    }
  
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Delete
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={deleteOperation} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default DeletePermition
