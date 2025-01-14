#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Default values
const defaults = {
  width: 100,
  fill: '█',
  empty: '░',
  details: false
};

// Parse command line arguments
const argv = yargs(hideBin(process.argv))
  .option('width', {
    type: 'number',
    description: 'Width of the progress bar in characters',
    default: defaults.width
  })
  .option('fill', {
    type: 'string',
    description: 'Character to use for filled portion',
    default: defaults.fill
  })
  .option('empty', {
    type: 'string',
    description: 'Character to use for empty portion',
    default: defaults.empty
  })
  .option('percentage', {
    type: 'number',
    description: 'Percentage to fill (0-100)',
    required: true,
    demandOption: true
  })
  .option('details', {
    type: 'boolean',
    description: 'Show percentage on the right side',
    default: defaults.details
  })
  .check((argv) => {
    if (argv.percentage < 0 || argv.percentage > 100) {
      throw new Error('Percentage must be between 0 and 100');
    }
    if (argv.width < 1) {
      throw new Error('Width must be greater than 0');
    }
    return true;
  })
  .parse();

function generateProgressBar(width, fill, empty, percentage, showDetails = false) {
  const fillWidth = Math.round((percentage / 100) * width);
  const emptyWidth = width - fillWidth;
  const bar = fill.repeat(fillWidth) + empty.repeat(emptyWidth);
  
  if (showDetails) {
    return `${bar} ${percentage}%`;
  }
  return bar;
}

// Generate and output the progress bar
const progressBar = generateProgressBar(
  argv.width,
  argv.fill,
  argv.empty,
  argv.percentage,
  argv.details
);

console.log(progressBar); 