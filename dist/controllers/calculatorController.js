var calculatorController = function (req, res) {
    var salary = req.query.salary;
    var newSalary = Number(salary) + Number(salary) * 0.3;
    res.send("entrou");
};
export { calculatorController };
