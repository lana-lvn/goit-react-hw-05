import { Field, Form, Formik } from "formik";
import s from './searchBar.module.css';

const SearchBar = ( { handleChangeQuery, query }) => {
    const onSubmit = (values) => {
        
        handleChangeQuery(values.query);

    };

    const initialValues = {
        query,
    };
    return (
        <div className={s.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={s.form}>
                    <Field name='query' className={s.input}/>
                    <button type="submit" className={s.searchBtn}>Search</button>
              </Form>
            </Formik>
        </div>
    );
};

export default SearchBar;
