import React from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import { Conversations, Contacts, NewConversationModal, NewContactModal } from './index';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

function Sidebar({ id }) {
   const [activeKey, setActiveKey] = React.useState(CONVERSATIONS_KEY);
   const conversationsIsOpen = activeKey === CONVERSATIONS_KEY;

   const [modalOpen, setModalOpen] = React.useState(false);
   const closeModal = () => {
      setModalOpen(false);
   };

   return (
      <div className="sidebar d-flex flex-column">
         <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant="tabs" className="justify-content-center">
               <Nav.Item className="nav__item">
                  <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav__item">
                  <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
               </Nav.Item>
            </Nav>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
               <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                  <Conversations />
               </Tab.Pane>
               <Tab.Pane eventKey={CONTACTS_KEY}>
                  <Contacts />
               </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
               Id: <span className="text-muted">{id}</span>
            </div>
            <Button onClick={() => setModalOpen(true)} className="rounded-0">
               Add New {conversationsIsOpen ? 'Conversation' : 'Contact'}
            </Button>
         </Tab.Container>
         <Modal show={modalOpen} onHide={closeModal}>
            {conversationsIsOpen ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} />}
         </Modal>
      </div>
   );
}

export default Sidebar;
