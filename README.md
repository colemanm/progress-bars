# Progress Bars

A command line tool for generating ASCII character progress bars. For use on websites, blogs, tweets, etc.

## Installation

```bash
git clone https://github.com/colemanm/progress-bars.git
cd progress-bars
npm install
```

Run this tool directly without installation using npx:

```bash
npx progress-bars --percentage 50
```

For development:
```bash
git clone https://github.com/yourusername/progress-bars.git
cd progress-bars
npm install
npm link
```

## Details

- Pass in properties including `length`, `width`, `fill`, `empty`, `percentage`, and `details`
- `width` is the width of the progress bar in characters (default: 100)
- `fill` is the character to use for the filled part of the progress bar (default: `█`)
- `empty` is the character to use for the empty part of the progress bar (default: `░`)
- `percentage` (required) is the percentage of the progress bar to fill (0-100)
- `details` (optional) is a boolean flag to show the percentage on the right side of the progress bar

The tool will create an ASCII character progress bar filled in to the specified percentage.

## Usage

Basic usage with required percentage:
```bash
progress-bars --percentage 50
```

Customizing the width and characters:
```bash
progress-bars --width 20 --fill "█" --empty "░" --percentage 75
```

Show percentage details:
```bash
progress-bars --percentage 50 --details
```

Example outputs:
```
# 50% with default settings (width: 100)
█████████████████████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

# 75% with width of 20
███████████████░░░░░

# 50% with details flag
█████████████████████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 50%
```
