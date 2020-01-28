class NextLib {
  constructor(ctx) {
    this.ctx = ctx;
  }

  redirect(locale) {
    const { res } = this.ctx;
    res.writeHead(301, {
      Location: locale,
    });
    res.end();
  }
}

export default NextLib;
