import React from 'react';
import styled from 'styled-components';

const groupAnagrams = (anagrams) => {
  const groups = {};
  
  // Group anagrams based on sorted characters
  anagrams.forEach((anagram) => {
    const sorted = anagram.split('').sort().join('');
    console.log('building groups: ', sorted);
    if (!groups[sorted]) {
      groups[sorted] = [];
    }
    groups[sorted].push(anagram);
  });
  
  // Convert object to array of arrays
  const result = Object.values(groups);
  
  // Sort subarrays by length and alphabetically
  result.forEach((subarray) => {
    subarray.sort();
  });
  console.log('building result: ', result);
  result.sort((a, b) => a.length - b.length);
  
  return result;
};

const AnagramGroups = () => {
  const anagrams = ["affx", "a", "ab", "ba", "nnx", "xnn", "cde", "edc", "dce", "xffa"];
  console.log('take this list of anagrams and outputs them in groups: ', anagrams);
  const groups = groupAnagrams(anagrams);
  
  return (
    <AnagramContainer>
      {groups.map((group, index) => (
        <div key={index}>
          {group.map((anagram, index) => (
            <span key={index}>{anagram} </span>
          ))}
        </div>
      ))}
    </AnagramContainer>
  );
};

const AnagramContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export { AnagramGroups };