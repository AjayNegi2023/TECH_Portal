
import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 20px); 
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  
  @media screen and (max-width: 992px) {
    flex: 0 0 calc(50% - 20px); 
  }
  
  @media screen and (max-width: 768px) {
    flex: 0 0 calc(100% - 20px); 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

const Text = styled.p`
  color: #878787;
  font-size: clamp(10px, 1.5vw, 16px);
  text-align: justify;
  padding: 0 5px 5px 5px;
`;

const Heading = styled.h3`
  color: #878787;
  font-size: clamp(16px, 2vw, 24px);
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
`;

const Dropdown = styled.select`
  margin-top: 10px;
  width: 100%;
  padding: 5px;
`;

const Option = styled.option``;

const SubjectCart = ({ subjects }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitChange = (event) => {
    const selectedUrl = event.target.value;
    setSelectedUnit(selectedUrl);
    if (selectedUrl) {
      window.open(selectedUrl, '_blank'); 
    }
  };

  return (
    <CardContainer>
      {subjects.map(subject => (
        <Card key={subject.id}>
          <Image src={subject.url} alt={subject.name} />
          <Heading>{subject.name}</Heading>
          <Text>{subject.description}</Text>
          <Dropdown onChange={handleUnitChange}>
            <Option value="">Select Unit</Option>
            {subject?.units?.map(unit => (
              <Option key={unit.id} value={unit.url}>{unit.id}</Option>
            ))}
          </Dropdown>
        </Card>
      ))}
    </CardContainer>
  );
}

export default SubjectCart;

