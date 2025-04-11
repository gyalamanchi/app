import styles from '../styles/Chatbot.module.css';

export default function Message({ text, isUser }) {
  return (
    <div className={`${styles.message} ${isUser ? styles.userMessage : styles.botMessage}`}>
      <div className={styles.messageContent}>{text}</div>
    </div>
  );
}