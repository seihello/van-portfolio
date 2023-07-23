import React from 'react'

type Props = {
  name: string;
  link: string;
  iconClassName: string;
}

export default function Contact(props: Props) {
  return (
    <a className="contact-link" href={props.link}>
      <button className="contact-item">
        <i className={props.iconClassName}></i>
        <p>{props.name}</p>
      </button>
    </a>
  )
}
