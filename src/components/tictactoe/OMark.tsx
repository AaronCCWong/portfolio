type Props = {
  className?: string;
};

export const OMark: React.FunctionComponent<Props> = ({ className }) => (
  <svg className={className} height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="15" fill="none" />
  </svg>
);
