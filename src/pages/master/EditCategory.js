import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ClayForm, { ClayInput } from '@clayui/form';
import ClayPanel from '@clayui/panel';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import apiCategory from '../../api/apiCategory';

export default function EditCategory() {
  let navigate = useNavigate();

  let {state} = useLocation();

  const [formValues, setFormValues] = useState({
    categoryId: '',
    categoryName: '',
    description: ''
  });
  const [active, setActive] = useState(false);

  useEffect(()=>{
    apiCategory.findRow(state.id)
      .then(data =>{
        setFormValues({
          categoryId : data.categoryId,
          categoryName : data.categoryName,
          description : data.description
        });
      });
  },[state])

  const handleChange = name => event => {
    setFormValues({ ...formValues, [name]: event.target.value });
  }

  const onSubmit = () => {
    apiCategory.createRow(formValues).then(result => {
      console.log('data has been saved');
    }).catch(error => console.log(error));

    navigate('/category', { state: { refresh: true } })

  }

  return (
    <div>
      <ClayForm onSubmit={onSubmit}>
        <ClayPanel.Group>
          <ClayPanel
            displayTitle="Edit Category"
            displayType="unstyled"
          >
            <ClayPanel.Body>
              <ClayForm.Group className="form-group-sm">
                <ClayInput
                  type="text"
                  value={formValues.categoryId}
                  readOnly={true}>
                </ClayInput>
                <label htmlFor="basicInput">Name</label>
                <ClayInput
                  placeholder="Category Name"
                  type="text"
                  value={formValues.categoryName}
                  onChange={handleChange("categoryName")}>
                </ClayInput>
              </ClayForm.Group>
              <ClayForm.Group className="form-group-sm">
                <label htmlFor="basicInput">Description</label>
                <textarea
                  className="form-control"
                  value={formValues.description}
                  onChange={handleChange("description")}
                  placeholder="Description"></textarea>
              </ClayForm.Group>
            </ClayPanel.Body>
          </ClayPanel>
        </ClayPanel.Group>
        <div className="sheet-footer">
          <ClayButton.Group>
            <div className="btn-group-item">
              <ClayButton type="submit" >
                Submit
              </ClayButton>
            </div>
            <div className="btn-group-item">
              <ClayButton displayType="secondary" onClick={() => navigate(-1)}>
                Cancel
              </ClayButton>
            </div>
          </ClayButton.Group>
        </div>
      </ClayForm>
    </div>
  )
}
