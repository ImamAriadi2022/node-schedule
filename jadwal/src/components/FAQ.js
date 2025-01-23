import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    const response = await axios.get('/api/faqs');
    setFaqs(response.data);
  };

  const handleAddFaq = async () => {
    if (editId) {
      await axios.put(`/api/faqs/${editId}`, { question, answer });
    } else {
      await axios.post('/api/faqs', { question, answer });
    }
    setQuestion('');
    setAnswer('');
    setEditId(null);
    fetchFaqs();
  };

  const handleEditFaq = (faq) => {
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setEditId(faq._id);
  };

  const handleDeleteFaq = async (id) => {
    await axios.delete(`/api/faqs/${id}`);
    fetchFaqs();
  };

  return (
    <div>
      <h2>FAQ Management</h2>
      <div>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleAddFaq}>{editId ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>: {faq.answer}
            <button onClick={() => handleEditFaq(faq)}>Edit</button>
            <button onClick={() => handleDeleteFaq(faq._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;