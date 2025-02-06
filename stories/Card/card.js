import "./card.css";

export const createCard = ({style, size, title, description, initials}) => {
    const wrapper = document.createElement('div');
    const card = document.createElement('div');
    const avatar = document.createElement('div');
    const cardContent = document.createElement('div');

    const titleContainer = document.createElement('h2');
    const descriptionContainer = document.createElement('p');

    titleContainer.textContent = title;
    descriptionContainer.textContent = description;
    avatar.textContent = initials;

    wrapper.appendChild(card);
    cardContent.appendChild(titleContainer);
    cardContent.appendChild(descriptionContainer);

    card.appendChild(avatar);
    card.appendChild(cardContent);

    wrapper.className = "wrapper";
    avatar.className = "card__avatar";
    cardContent.className = "card__content";
    card.className = ["card", `card--${style}`, `card--${size}`].join(" ");

    return wrapper;
}
