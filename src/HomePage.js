import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes || []);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Jokes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HomePage;
