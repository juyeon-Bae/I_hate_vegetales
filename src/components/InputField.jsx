import styles from "../styles/InputField.module.css"

export default function InputField({ name, value, onChange, placeholder, type }) {
    return (
        <div>
            <input className={styles.input}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
    )
}