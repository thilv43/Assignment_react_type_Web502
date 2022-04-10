import React from 'react'

type Props = {}

const FormSearch = (props: Props) => {
    return (
    <form className="d-flex pl-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

)
}

export default FormSearch;