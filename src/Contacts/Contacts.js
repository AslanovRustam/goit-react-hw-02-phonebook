import React from 'react';
import s from './contacs.module.css';

const Contactlist = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <span>Total number of contacts - {contacts.length}</span>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            {name} {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contactlist;
