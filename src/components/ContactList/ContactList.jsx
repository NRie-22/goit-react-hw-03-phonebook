import React from 'react';
import PropTypes from 'prop-types';
import { ListWrap, List } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css'; // Додайте цей рядок для підключення стилів Ant Design

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          {name + ' : ' + number}

          <Button type="button" onClick={() => onDelete(id)}>
            <UserDeleteOutlined />
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
