import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Filter = ({ handleFilter }) => {
  const [filter, setFilter] = useState({ title: "", rating: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "rating") {
      updatedValue = Math.min(5, Math.max(0, value)); 
    }

    setFilter({ ...filter, [name]: updatedValue });
    handleFilter({ ...filter, [name]: updatedValue });
  };

  return (
    <Form className="d-flex justify-content-between mb-4">
      <FormControl
        type="text"
        placeholder="Search by title"
        name="title"
        value={filter.title}
        onChange={handleChange}
      />
      <FormControl
        type="number"
        placeholder="Filter by rating"
        name="rating"
        value={filter.rating}
        onChange={handleChange}
        min="0"
        max="5"
      />
      <Button variant="primary" onClick={() => handleFilter(filter)}>
        Filter
      </Button>
    </Form>
  );
};

export default Filter;

