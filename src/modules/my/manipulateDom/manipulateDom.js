import * as d3 from 'd3';
import { LightningElement, track } from 'lwc';

const DATASET = [15, 8, 42, 4];
const MAX_HEIGHT = 100;

const updateChart = chartEl => {
    const barHeight = d => `${d.toString()}px`;
    const barMarginTop = d => `${(MAX_HEIGHT - d).toString()}px`;

    const selection = d3
        .select(chartEl)
        .selectAll('.chart__bar')
        .data(DATASET)
        .style('height', barHeight)
        .style('margin-top', barMarginTop);

    selection
        .enter()
        .append('div')
        .attr('class', 'chart__bar')
        .style('height', barHeight)
        .style('margin-top', barMarginTop);
};

export default class ManipulateDom extends LightningElement {
    @track greeting = 'World';

    renderedCallback() {
        const chartEl = this.template.querySelector('.chart');
        updateChart(chartEl);
    }

    changeHandler(event) {
        this.greeting = event.target.value;
    }
}
