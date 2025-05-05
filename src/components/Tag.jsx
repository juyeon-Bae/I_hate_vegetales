
export default function Tag({ value }) {
    return (
        <div style={{
            padding: "2.5px 9px",
            background: "#E0E8FF",
            borderRadius: "4px",
            display: "inline-block",
            marginTop: "17px"
        }}>
            <span style={{
                fontSize: "12px",
                color: "#3B6DFF",
                fontWeight: 600,
            }}>{value}</span>
        </div>
    )
}