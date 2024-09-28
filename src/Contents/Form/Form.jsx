import React from 'react'
import * as Yup from 'yup';
import './Form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobile: Yup.string().matches(/^[0-9]+$/, 'Mobile number must contain only digits').min(10, 'Mobile number must be at least 10 digits').required('Mobile number is required'),
  location: Yup.string().required('Location is required'),
  course: Yup.string().required('Please select a course'),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <div className="container mt-5">
            <div className="card mycard">
          <h3 className="py-4 my-text-bold my-text text-center">Admission Open For New Batches. Enquiry Now!!</h3>
          <form className='py-3 px-4' onSubmit={handleSubmit(onSubmit)}>
            <div className="row d-flex justify-content-center">
            <div className="mb-3 col-xl-3 position-relative">
              <label className="form-label mylabel">Enter Your Name</label>
              <input
                type="text"
                className={`form-control  myform-control ${errors.name ? 'is-invalid' :(watch('name')&& !errors.name)?'is-valid': ''}`}
                {...register('name')}
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
    
            {/* Mobile */}
            <div className="mb-3 col-xl-3 position-relative">
              <label className="form-label mylabel">Enter Your Phone Number</label>
              <input
                type="text"
                className={`form-control  myform-control ${errors.mobile ? 'is-invalid' :(watch('mobile')&& !errors.mobile)?'is-valid': ''}`}
                {...register('mobile')}
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
            </div>
    
            {/* Location */}
            <div className="mb-3 col-xl-3 position-relative">
              <label className="form-label mylabel">Enter Your Location</label>
              <input
                type="text"
                className={`form-control  myform-control ${errors.location ? 'is-invalid' :(watch('location')&& !errors.location)?'is-valid': ''}`}
                {...register('location')}
              />
              {errors.location && <div className="invalid-feedback">{errors.location.message}</div>}
            </div>
    
            {/* Course Select */}
            <div className="mb-3 col-xl-3 position-relative">
              <label className="form-label mylabel">Course</label>
              <select
                className={`form-select  myform-control ${errors.course ? 'is-invalid'  :(watch('course')&& !errors.course)?'is-valid': ''}`}
                {...register('course')}
              >
                <option value="">Select a course</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
              {errors.course && <div className="invalid-feedback">{errors.course.message}</div>}
            </div>
            </div>
            {/* Submit Button */}
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn  btn-my rounded-pill">
             &nbsp;&nbsp;Send Enquiry&nbsp;&nbsp;
            </button>
            </div>
          </form>
        </div>
        </div>
      );
}

export default Form