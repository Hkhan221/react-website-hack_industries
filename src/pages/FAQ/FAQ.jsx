import React from "react";
import { useState } from "react";
import "../FAQ/FAQ.scss";

function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(i);
    }
    setSelected(i);
  };

  return (
    <div className="faq-font">
      <div class="faq-Image" alt="3DPrint-image" />
      <h2 className="faq-header">FAQ</h2>
      <p className="faq-paragraph">
        Here you can find the answers you may be looking for. Please check the
        Frequent Questions below!
      </p>
      <div className="faq-flex">
        {/* Normal FAQ */}
        <ol className="faq-ol">
          <div className="faq-ol-box">
            <li className="faq-ol-li faq-bold">Can we refund our products?</li>
            <p className="faq-ol-answers">
              <span className="faq-bold">Answer:</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ol-box">
            <li className="faq-ol-li faq-bold">
              Do you do international deliveries?
            </li>
            <p className="faq-ol-answers">
              <span className="faq-bold">Answer:</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ol-box">
            <li className="faq-ol-li faq-bold">
              Can we request our own 3D Models?
            </li>
            <p className="faq-ol-answers">
              <span className="faq-bold">Answer:</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ol-box">
            <li className="faq-ol-li faq-bold">
              What is the expected delivery period?
            </li>
            <p className="faq-ol-answers">
              <span className="faq-bold">Answer:</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ol-box">
            <li className="faq-ol-li faq-bold">
              Who do I contact if the product did not arrive?
            </li>
            <p className="faq-ol-answers">
              <span className="faq-bold">Answer:</span> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
        </ol>
        <hr className="faq-gap" />
        {/* FAQ-Dropbox */}
        <div className="faq-wrapper">
          <div className="faq-accordion">
            {data.map((item, i) => (
              <div className="faq-item">
                <div className="faq-title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected === i ? "faq-content faq-show" : "faq-content"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "Q1: Can we refund our products?",
    answer:
      "A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi obcaecati labore magnam, aut facere, reprehenderit rem eius porro numquam sit quod reiciendis enim rerum iure id. Debitis, natus. Deleniti eaque asperiores reprehenderit voluptate harum consequuntur quisquam unde ipsum architecto minus excepturi voluptatibus, laborum nostrum ullam enim beatae quibusdam perspiciatis.",
  },
  {
    question: "Q2: Do you do international deliveries?",
    answer:
      "A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi obcaecati labore magnam, aut facere, reprehenderit rem eius porro numquam sit quod reiciendis enim rerum iure id. Debitis, natus. Deleniti eaque asperiores reprehenderit voluptate harum consequuntur quisquam unde ipsum architecto minus excepturi voluptatibus, laborum nostrum ullam enim beatae quibusdam perspiciatis.",
  },
  {
    question: "Q3: Can we request our own 3D Models?",
    answer:
      "A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi obcaecati labore magnam, aut facere, reprehenderit rem eius porro numquam sit quod reiciendis enim rerum iure id. Debitis, natus. Deleniti eaque asperiores reprehenderit voluptate harum consequuntur quisquam unde ipsum architecto minus excepturi voluptatibus, laborum nostrum ullam enim beatae quibusdam perspiciatis.",
  },
  {
    question: "Q4: What is the expected delivery period?",
    answer:
      "A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi obcaecati labore magnam, aut facere, reprehenderit rem eius porro numquam sit quod reiciendis enim rerum iure id. Debitis, natus. Deleniti eaque asperiores reprehenderit voluptate harum consequuntur quisquam unde ipsum architecto minus excepturi voluptatibus, laborum nostrum ullam enim beatae quibusdam perspiciatis.",
  },
  {
    question: "Q5: Who do I contact if the product did not arrive?",
    answer:
      "A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi obcaecati labore magnam, aut facere, reprehenderit rem eius porro numquam sit quod reiciendis enim rerum iure id. Debitis, natus. Deleniti eaque asperiores reprehenderit voluptate harum consequuntur quisquam unde ipsum architecto minus excepturi voluptatibus, laborum nostrum ullam enim beatae quibusdam perspiciatis.",
  },
];

export default FAQ;



        {/* <ul className="faq-ul">
          <div className="faq-ul-box">
            <li className="faq-ul-li">Q: Can we refund our products?</li>
            <p className="faq-ul-answers">
              <span className="faq-bold">A:</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ul-box">
            <li className="faq-ul-li">
              Q: Do you do international deliveries?
            </li>
            <p className="faq-ul-answers">
              <span className="faq-bold">A:</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ul-box">
            <li className="faq-ul-li">Q: Can we request our own 3D Models?</li>
            <p className="faq-ul-answers">
              <span className="faq-bold">A:</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ul-box">
            <li className="faq-ul-li">
              Q: What is the expected delivery period?
            </li>
            <p className="faq-ul-answers">
              <span className="faq-bold">A:</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
          <div className="faq-ul-box">
            <li className="faq-ul-li">
              Q: Who do I contact if the product did not arrive?
            </li>
            <p className="faq-ul-answers">
              <span className="faq-bold">A:</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quam, architecto numquam sequi,
              fugiat nobis similique distinctio consectetur in voluptas non
              cupiditate atque pariatur optio consequatur saepe facere,
              molestias esse iste! Architecto molestiae voluptas possimus nobis
              cupiditate? Natus ipsa omnis consequuntur cum perspiciatis autem?
              Amet at esse quam nobis itaque! Dolorem!
            </p>
          </div>
        </ul> */}