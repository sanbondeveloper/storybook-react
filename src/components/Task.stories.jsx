import { fn } from '@storybook/test';

import Task from './Task';

/**
 * Actions
 * 액션은 UI 컴포넌트를 개별적으로 빌드할 때 상호 작용을 확인하는 데 도움이 됩니다.
 * 앱의 컨텍스트에 있는 함수 및 상태에 액세스할 수 없는 경우가 종종 있습니다.
 * fn()을 사용하여 stub을 삽입하세요
 * stub: 테스트 중 실제 컴포넌트나 모듈을 대체하는 간단한 코드
 */
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

/**
 * 스토리북에는 컴포넌트와 그 하위 스토리라는 두 가지 기본 수준의 구성이 있습니다.
 * 컴포넌트당 필요한 만큼의 스토리를 가질 수 있습니다.
 * component: 컴포넌트 자체, 스토리를 만들 컴포넌트
 * title: 스토리북 사이드바에서 컴포넌트를 그룹화하거나 분류하는 방법
 * tags: 컴포넌트에 대한 문서를 자동으로 생성
 * excludeStories: 스토리에서 필요하지만 스토리북에서 렌더링해서는 안 되는 추가 정보
 * args: 컴포넌트가 사용자 정의 이벤트를 모킹할 것으로 예상되는 액션 인수를 정의
 */
export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  excludeStories: /.*Data$/, // Data로 끝나는 모든 문자열
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
