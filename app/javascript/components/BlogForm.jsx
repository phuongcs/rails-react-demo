import React, {useState} from 'react'
import SubmitButton from "./Button/SubmitButton";
import Select from "react-select";

const BlogForm = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [catId, setCatId] = useState(null);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const changeContent = (e) => {
    setContent(e.target.value);
  }

  const submit = () => {
    const item = {
      title,
      content,
      category_id: catId
    }

    fetch('/blogs', {
      body: JSON.stringify(item),
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
    }).then(res => {
      console.log('response: ', res);
      location.href = res.url;
    });

    console.log('test submit', item);
  }

  return (
    <div className="form-group">
      <h2 className="mb-2">Create new blog</h2>
      <div className="mb-2">
        <label className="form-label">Title</label>
        <input className="form-control" onChange={changeTitle}/>
      </div>
      <div className="mb-2">
        <label className="form-label">Content</label>
        <textarea className="form-control" onChange={changeContent}></textarea>
      </div>

      <div className="mb-2">
        <label className="form-label">Category</label>
        <Select options={props.items} getOptionLabel={(item) => item.name}
                onChange={(item) => setCatId(item.id)}></Select>
      </div>

      <div className="mt-3">
        <SubmitButton onClick={submit}></SubmitButton>
      </div>

    </div>
  )
}

BlogForm.defaultProps = {
  items: []
}

export default BlogForm;