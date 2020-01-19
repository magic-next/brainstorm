import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../Button';

import { create } from '../../../services/decks';
import { to } from '@/utils';
import * as S from './styled';

const DeckForm = () => {
  const [form, setForm] = useState({
    name: '',
    format: 'commander',
    list: '',
  });
  const setField = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const onSubmit = async (ev) => {
    ev.preventDefault();
    const [err, data] = await to(create(form));
    if (err) {
      console.error(err);
      toast.error('Erro ao cadastrar Deck');
      return;
    }
    console.log(data);
    alert('Success!');
  };

  return (
    <S.FormWrapper onSubmit={onSubmit}>
      <input type="text" value={form.name} onChange={setField('name')} />
      <div>
        <textarea name="card-list" value={form.list} onChange={setField('list')} />
      </div>
      <Button type="submit" primary>Criar Deck</Button>
    </S.FormWrapper>
  );
};

export default DeckForm;
