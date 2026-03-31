export default function NotFound() {
  return (
    <div className="not-found">
      <pre className="not-found-ascii">{[
        "            *              .        ",
        "     .                *             ",
        "                 .            *     ",
        "        *                           ",
        "   .          *   404   .           ",
        "                           *        ",
        "       *            .               ",
        "              *               .     ",
        "     .              *              .",
      ].join("\n")}</pre>
      <p className="not-found-msg">Nothing here.</p>
    </div>
  );
}
