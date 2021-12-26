export const StyledJsx = () => {
   return (
     <>
      <p className="title">StyledJsxです</p>
      <button className="button">ボタン</button>


      <style jsx>{`
        .title {
          color: red;
        }

        .button {
          background-color: green;
        }
      `}</style>
     </>
   )
 }
