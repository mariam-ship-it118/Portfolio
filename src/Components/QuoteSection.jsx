import React, { useEffect, useState } from 'react';
import './QuoteSection.css';
import './QuoteSectionRes.css';
import { supabase } from '../Supabase';

const QuoteSection = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function getQuote() {
      const { data, error } = await supabase
        .from('Messages')
        .select('*')
        .eq('id', 4) // replace 1 with the ID of the quote you want
        .single();    // ensures only one row is returned

      if (!error) {
        setQuote(data);
      } else {
        console.error(error);
      }
      setLoading(false);
    }

    getQuote();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!quote) return <p>No quote found.</p>;

  return (
    <section className="quotebg">
      <h2 className="designer">{quote.Sender_Name}</h2>
      <p className="thequote">{quote.Message_Content}</p>
      <p className="bookname">{quote.book_name}</p>
      <img src={quote.img} alt="visual designer" className='mepicture' />
    </section>
  );
};

export default QuoteSection;
    


