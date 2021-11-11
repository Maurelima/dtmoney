import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;

// export const Content = styled.div`
//     max-width: 1120px;
//     margin: 0 auto;

//     padding: 2rem 1rem 12rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     button {
//         font-size: 1rem;
//         color: #fff;
//         background-color: var(--blue-light);
//         border: 0;
//         padding: 0 2rem;
//         border-radius: 0.25rem;
//         height: 3rem;

//         transition: filter 0.2s;

//         &:hover {
//             filter: brightness(0.9);
//         }
//     }
// `;
