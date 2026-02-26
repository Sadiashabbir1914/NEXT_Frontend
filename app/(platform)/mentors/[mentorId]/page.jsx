"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { GetMentors } from '@/app/_lib/api';

export default function Indi_Mentor() {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    GetMentors().then(data => setMentor(data.results[0]));
  }, []);

  if (!mentor) return <p>Loading...</p>;

  return (
    <div>
      <h2>{mentor.name.first} {mentor.name.last}</h2>
      <img src={mentor.picture.large} alt="Profile Picture" />
      <p>Email: {mentor.email}</p>
      <p>Phone: {mentor.phone}</p>
    </div>
  );
}
